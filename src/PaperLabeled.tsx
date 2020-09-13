import React from 'react'
import { createStyles, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(() => createStyles({
    papper: {
        padding: 10,
    },
    papperLabel: {
        textAlign: 'left',
        marginTop: -23,
    },
    papperLabelText: {
        backgroundColor: 'white',
    },
}))

type PaperLabeledProps = {
    children: React.ReactNode,
    title?: string,
    labelComp?: React.ReactElement,
}

const PaperLabeled = ({ children, title, labelComp }: PaperLabeledProps): React.ReactElement => {
    const classes = useStyles()
    const Comp = labelComp || <span className={classes.papperLabelText}>{title}</span>

    return (
        <Paper variant="outlined" className={classes.papper}>
            <p className={classes.papperLabel}>
                {Comp}
            </p>
            <div>
                {children}
            </div>
        </Paper>
    )
}

PaperLabeled.defaultProps = {
    title: '',
    labelComp: undefined,
}

export default PaperLabeled
