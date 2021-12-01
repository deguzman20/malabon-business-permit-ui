import { connect } from 'react-redux';
import { LandingPage } from '../components/lazy-imports';

const mapStateToProps = ({ state }) => {
  return {
    // counter: state.counter
  }
};

export const LandingPageContainer = connect(null, mapStateToProps)(LandingPage);