import React from 'react'
import {
    createStyles, makeStyles, Paper, PaperProps,
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(() => createStyles({
    papper: {
        padding: 10,
    },
    papperLabel: {
        textAlign: 'left',
        marginTop: -24,
    },
    papperLabelText: {
        backgroundColor: 'white',
    },
}))

type PaperLabeledProps = {
    children?: React.ReactNode,
    paperProps?: PaperProps,
    title?: string,
    labelComp?: React.ReactElement,
    labelClass?: string,
    labelClassContainer?: string,
}

const PaperLabeled = ({
    paperProps, children, title, labelComp, labelClass, labelClassContainer,
}: PaperLabeledProps): React.ReactElement => {
    const classes = useStyles()
    const paperPropsDefault: PaperProps = {
        variant: 'outlined',
        ...paperProps,
        className: clsx(classes.papper, paperProps?.className),
    }
    const labelClassTextInner = clsx(classes.papperLabelText, labelClass)
    const labelClassInner = clsx(classes.papperLabel, labelClassContainer)

    const Comp = labelComp || <span data-testid="default-label" className={labelClassTextInner}>{title}</span>

    return (
        <Paper {...paperPropsDefault}>
            <div className={labelClassInner}>
                {Comp}
            </div>
            <div>
                {children}
            </div>
        </Paper>
    )
}

PaperLabeled.defaultProps = {
    labelClass: '',
    labelClassContainer: '',
    title: '',
    labelComp: undefined,
    paperProps: {},
    children: undefined,
}

export default PaperLabeled
