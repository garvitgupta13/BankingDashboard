import React, { useState, useEffect } from "react";
import { BillsData as data } from "../../services/billsData";
import moment from "moment";
import Button from "@mui/material/Button";
import ConfirmationModal from "./ConformationModal";
import AddReminderModal from "./AddReminder";
import styles from "./BillReminders.module.scss";

//create a bill reminder component
export default function BillReminders() {
    const [billReminders, setBillReminders] = useState(data);
    const [confirmationModalVisibility, setConfirmationModalVisibility] =
        useState(false);
    const [addReminderModalVisibility, setAddReminderModalVisibility] =
        useState(false);
    const [selectedBillReminder, setSelectedBillReminder] = useState(undefined);

    const handleUpdateBillReminder = (billReminder) => {
        const updatedBillReminders = billReminders.map((item) => {
            if (item.id === billReminder.id) {
                const daysLeft = moment(billReminder.startDate, "DD-MM-YYYY")
                    .add(billReminder.frequency, billReminder.counter)
                    .diff(moment(), "days");
                if (daysLeft <= 0) {
                    billReminder.paid = false;
                }
                return billReminder;
            }
            return item;
        });
        //TODO: Update the reminder in db
        setBillReminders(updatedBillReminders);
    };

    return (
        <div>
            <h1>Bill Reminders</h1>
            <div className="bill-reminders">
                {billReminders.map((billReminder) => {
                    console.log(billReminder);
                    const dueDate = moment(billReminder.startDate, "DD-MM-YYYY").add(billReminder.counter + 1, billReminder.frequency);
                    const daysLeft = dueDate.diff(moment(), "days");
                    return (
                        <div
                            className={`${styles.billReminder} ${billReminder.paid ? styles.success : (daysLeft <= 3 ? styles.alert : null)}`}
                            key={billReminder.id}
                            onClick={() => {
                                setSelectedBillReminder(billReminder);
                                setConfirmationModalVisibility(true);
                            }}
                        >
                            <div className="bill-reminder-name">
                                {billReminder.name}
                            </div>
                            <div className="bill-reminder-amount">
                                {billReminder.amount ??
                                    billReminder.serviceProvider}
                            </div>
                            <div className="bill-reminder-daysLeft"></div>
                            {daysLeft >= 0
                                ? daysLeft <= 65
                                    ? `${daysLeft} days left`
                                    : `${dueDate.diff(
                                        moment(),
                                        "months"
                                    )} months left`
                                : `Missed the due date ${Math.abs(
                                    daysLeft
                                )} days before`}
                        </div>
                    );
                })}
            </div>
            <Button onClick={() => setAddReminderModalVisibility(true)}>
                Add
            </Button>
            {addReminderModalVisibility && (
                <AddReminderModal
                    visible={addReminderModalVisibility}
                    handleVisiblity={setAddReminderModalVisibility}
                    handleAddBillReminder={(newReminder) => {
                        setBillReminders([...billReminders, newReminder]);
                    }}
                />
            )}
            {confirmationModalVisibility && (
                <ConfirmationModal
                    billReminder={selectedBillReminder}
                    handleUpdateBillReminder={handleUpdateBillReminder}
                    handleVisiblity={setConfirmationModalVisibility}
                    visible={confirmationModalVisibility}
                />
            )}
        </div>
    );
}
