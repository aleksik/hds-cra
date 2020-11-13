import React, { ChangeEvent, useState } from "react";
import {
  Checkbox,
  SelectionGroup as HDSSelectionGroup,
  RadioButton,
} from "hds-react";

const getCheckboxItems = (
  prefix: string,
  numberOfItems: number,
  checked: { [key: string]: boolean },
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
) =>
  [...Array(numberOfItems)].map((_, i) => (
    <Checkbox
      id={`${prefix}checkbox${i}`}
      label={`Option ${i + 1}`}
      name={`${prefix}checkbox${i}`}
      key={`${prefix}checkbox${i}`} // eslint-disable-line react/no-array-index-key
      checked={checked[`${prefix}checkbox${i}`]}
      onChange={handleChange}
    />
  ));

const getRadioButtonItems = (
  prefix: string,
  numberOfItems: number,
  radioValue: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
) =>
  [...Array(numberOfItems)].map((_, i) => (
    <RadioButton
      id={`${prefix}radio${i}`}
      label={`Option ${i + 1}`}
      key={`${prefix}radio${i}`} // eslint-disable-line react/no-array-index-key
      value={`${prefix}radio${i}`}
      name={`${prefix}radio`}
      checked={radioValue === `${prefix}radio${i}`}
      onChange={handleChange}
    />
  ));

export const SelectionGroup = () => {
  const [checkedItems1, setCheckedItems1] = useState({});
  const [checkedItems2, setCheckedItems2] = useState({});
  const [radioValue1, setRadioValue1] = useState("1radio0");
  const [radioValue2, setRadioValue2] = useState("2radio0");
  const handleCheckboxChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems1({ ...checkedItems1, [item]: isChecked });
  };
  const handleRadioChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue1(e.target.value);
  };
  const handleCheckboxChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems2({ ...checkedItems2, [item]: isChecked });
  };
  const handleRadioChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue2(e.target.value);
  };
  const checkboxes1 = getCheckboxItems(
    "1",
    3,
    checkedItems1,
    handleCheckboxChange1
  );
  const radiobuttons1 = getRadioButtonItems(
    "1",
    3,
    radioValue1,
    handleRadioChange1
  );
  const checkboxes2 = getCheckboxItems(
    "2",
    3,
    checkedItems2,
    handleCheckboxChange2
  );
  const radiobuttons2 = getRadioButtonItems(
    "2",
    3,
    radioValue2,
    handleRadioChange2
  );
  return (
    <div>
      <h1>Selection group</h1>
      <HDSSelectionGroup label="Label">{checkboxes1}</HDSSelectionGroup>
      <br />
      <br />
      <HDSSelectionGroup label="Label">{radiobuttons1}</HDSSelectionGroup>
      <br />
      <br />
      <HDSSelectionGroup label="Label" direction="horizontal">
        {checkboxes2}
      </HDSSelectionGroup>
      <br />
      <br />
      <HDSSelectionGroup label="Label" direction="horizontal">
        {radiobuttons2}
      </HDSSelectionGroup>
    </div>
  );
};
