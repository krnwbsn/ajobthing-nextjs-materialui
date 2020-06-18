import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import DrawerList from '../../elements/DrawerList';
import drawerListData from '../../../constants/drawerListData';

export default class Component extends React.Component {
  _handleLogoutClick() {
    return () => {
      location.href = '/';
    };
  }

  _renderAppBar() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item xs={3}>
              <Typography className={classes.appBarTitle} color="inherit" variant="subtitle1">Code Base</Typography>
            </Grid>
            <Grid className={classes.pullRight} item xs={3}>
              <IconButton
                aria-label="Log out"
                className={classes.pullRight}
                onClick={this._handleLogoutClick()}
                title="Log Out"
              >
                <Icon>exit_to_app</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }

  _renderDrawer() {
    const { classes } = this.props;

    return (
      <Drawer classes={{ paper: classes.drawer }} variant="permanent">
        <List>
          {
            drawerListData.items.map((item, idx) =>
              <DrawerList isMiniDrawer={false} item={item} key={idx} />
            )
          }
        </List>
      </Drawer>
    );
  }

  render() {
    const { children, classes } = this.props;

    return (
      <div>
        {this._renderAppBar()}
        {this._renderDrawer()}
        <main className={classes.content}>
          {children}
        </main>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired
};

Component.defaultProps = {
  children: null,
};
