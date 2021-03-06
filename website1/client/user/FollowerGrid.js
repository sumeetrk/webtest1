import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Person from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto'
  },
  gridList: {
    width: 500,
    height: 220,
  },
  tileText: {
    textAlign: 'center',
    marginTop: 10
  }
}))
export default function FollowGrid () {
  const classes = useStyles()
    return (<div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
           <GridListTile style={{'height':120}} key={1}>
                <Avatar className={classes.bigAvatar}>
                <Person/>
                </Avatar>
                <Typography className={classes.tileText}>user21</Typography>
            </GridListTile>
            <GridListTile style={{'height':120}} key={1}>
                <Avatar className={classes.bigAvatar}>
                <Person/>
                </Avatar>
                <Typography className={classes.tileText}>user32</Typography>
            </GridListTile>
            <GridListTile style={{'height':120}} key={1}>
                <Avatar className={classes.bigAvatar}>
                <Person/>
                </Avatar>
                <Typography className={classes.tileText}>Yashraj</Typography>
            </GridListTile>
      </GridList>
    </div>)
}
