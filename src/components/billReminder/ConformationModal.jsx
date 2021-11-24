import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmationModal({
    visible,
    handleVisiblity,
    handleUpdateBillReminder,
    billReminder
}) {
    const [amount, setAmount] = useState(billReminder.amount ?? undefined);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const handleCancel = () => {
        handleVisiblity(false);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        const updatedBillReminder = {
            ...billReminder,
            counter: billReminder.counter + 1,
            paid: true
        };
        handleUpdateBillReminder(updatedBillReminder);
        setConfirmLoading(false);
        handleVisiblity(false);
    };
    return (
        <Dialog open={visible} onClose={handleCancel}>
            <DialogTitle>{`Pay ${billReminder.name}`}</DialogTitle>
            <DialogContent>
                {billReminder.type === "Recharge" ||
                billReminder.type === "Electricity" ? (
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Amount"
                        type="nuber"
                        fullWidth
                        variant="standard"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                ) : (
                    <DialogContentText>
                        {`Proceed to pay ${billReminder.amount} to ${
                            billReminder.serviceProvider ??
                            billReminder.senderAccNo
                        }`}
                    </DialogContentText>
                )}
            </DialogContent>
            <DialogActions>
                <Button style={{ borderRadius: "6px" }} onClick={handleCancel}>
                    Cancel
                </Button>

                <Button onClick={handleOk} style={{ borderRadius: "6px" }}>
                    Pay
                </Button>
            </DialogActions>
        </Dialog>
        /*<Modal
            title={`Pay ${billReminder.name}`}
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            icon={<ExclamationCircleOutlined />}
            bodyStyle={{ padding: "8px 20px 30px 20px" }}
            footer={[
                <Button
                    key="cancel"
                    style={{ borderRadius: "6px" }}
                    onClick={handleCancel}
                >
                    Cancel
                </Button>,
                <Button
                    key="Pay"
                    type="primary"
                    onClick={handleOk}
                    style={{ borderRadius: "6px" }}
                >
                    Pay
                </Button>
            ]}
        >
            {billReminder.type === "Recharge" ||
            billReminder.type === "Electricity" ? (
                <div>
                    <Input
                        name="amount"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                </div>
            ) : (
                <div></div>
            )}
        </Modal>*/
    );
}
