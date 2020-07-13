import * as React from "react";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useParams } from "@reach/router";
import Button from "@material-ui/core/Button";
import Partitions from "./Partitions";
import ChallengeTable from "./ChallengeTable";
import SubmissionDialog from "./SubmissionDialog";
import { RouteComponentProps } from "@reach/router";


const Challenge = (props: RouteComponentProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const [error, setError] = useState(null);
    const [version, setVersion] = useState<Version>();
    const [name, setName] = useState<string>("1.0.0");

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const parameters = useParams();

    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setName(event.target.value as string);
    };

    const init = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    };

    useEffect(() => {
        const endpoint = `/tasks/${parameters.task}/challenges/${parameters.challenge}/versions/1-0-0`;

        fetch(endpoint, init)
            .then((response) => response.json())
            .then(
                (result) => {
                    setVersion(result);
                },
                (error) => {
                    setError(error);
                },
            );
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h5" gutterBottom>
                        &nbsp;
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="version-label">Version</InputLabel>

                        <Select
                            id="version-select"
                            label="Version"
                            labelId="version-label"
                            onChange={onChange}
                            value={name}
                        >
                            <MenuItem value="1.0.0">1.0.0</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <br />

            <ChallengeTable version={version} />

            <br />

            <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={onOpen}
            >
                Submit new scores
            </Button>

            <SubmissionDialog onClose={onClose} open={open} />

            <br />

            <br />

            <Partitions />
        </div>
    );
};

export default Challenge;
