import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    alert: {
        margin: '16px 0 0 0',
        width: '100%',
    },
    messages: {
        margin: '0 0 16px 0',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));
