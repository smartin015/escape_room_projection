import {connect} from 'react-redux';
import {AppState} from '../reducers/StateTypes';
import Main, {DispatchProps, StateProps} from './Main';

const mapStateToProps = (state: AppState): StateProps => {
  return {
    view: state.view.view,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {};
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
