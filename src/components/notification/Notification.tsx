import React from "react";
import { Notification as HDSNotification } from "hds-react";

export const Notification = () => {
  return (
    <div>
      <h1>Notifications</h1>
      <div>
        <HDSNotification label="Label" type="alert">
          Lorem ipsum
        </HDSNotification>
        <HDSNotification label="Label" type="error">
          Lorem ipsum
        </HDSNotification>
        <HDSNotification label="Label" type="success">
          Lorem ipsum
        </HDSNotification>
        <HDSNotification label="Label" type="alert" size="small">
          Lorem ipsum
        </HDSNotification>
        <HDSNotification label="Label" type="error" size="large">
          Lorem ipsum
        </HDSNotification>
        <HDSNotification label="Label" type="error" invisible>
          Lorem ipsum
        </HDSNotification>
      </div>
    </div>
  );
};
