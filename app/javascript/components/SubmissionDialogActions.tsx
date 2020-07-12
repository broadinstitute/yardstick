import * as React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

type CreateSubmissionProps = {
    onClose: () => void
}

const SubmissionDialogActions = ({onClose}: CreateSubmissionProps) => {
    return (
        <DialogActions>
            <Button autoFocus onClick={onClose} color="primary">
                Disagree
            </Button>

            <Button onClick={onClose} color="primary" autoFocus>
                Agree
            </Button>
        </DialogActions>
    )
};

export default SubmissionDialogActions;
