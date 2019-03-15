import React from 'react';
import styled from 'styled-components';

// Intros
import CompoundIntro from './intro/compound-component/usage';
import HocIntro from './intro/higher-order-component/usage';
import RenderPropsIntro from './intro/render-props/usage';

// Exercises
import CompoundExercise from './exercise/compound-component/usage';
import HocExercise from './exercise/higher-order-component/usage';
import RenderPropsExercise from './exercise/render-props/usage';

// Final resutls
import Compound from './final/compound-component/usage';
import Hoc from './final/higher-order-component/usage';
import RenderProps from './final/render-props/usage';

const MODES = {
  INTRO: 'INTRO',
  EXERCISE: 'EXERCISE',
  FINAL: 'FINAL',
};

const EXERCISES = {
  HOC: 'HOC',
  COMPOUND: 'COMPOUND',
  RENDER_PROPS: 'RENDER_PROPS',
};

// ***************** CHANGE THESE TO SWITCH BETWEEN EXERCISES *****************

const ACTIVE_EXAMPLE = EXERCISES.HOC;
const MODE = MODES.INTRO;

// ****************************************************************************

class App extends React.Component {
  renderFinal = () => {
    return (
      <>
        {ACTIVE_EXAMPLE === EXERCISES.COMPOUND && <Compound />}
        {ACTIVE_EXAMPLE === EXERCISES.HOC && <Hoc />}
        {ACTIVE_EXAMPLE === EXERCISES.RENDER_PROPS && <RenderProps />}
      </>
    )
  }

  renderExercice = () => {
    return (
      <>
        {ACTIVE_EXAMPLE === EXERCISES.COMPOUND && <CompoundExercise />}
        {ACTIVE_EXAMPLE === EXERCISES.HOC && <HocExercise />}
        {ACTIVE_EXAMPLE === EXERCISES.RENDER_PROPS && <RenderPropsExercise />}
      </>
    )
  }

  renderIntro = () => {
    return (
      <>
        {ACTIVE_EXAMPLE === EXERCISES.COMPOUND && <CompoundIntro />}
        {ACTIVE_EXAMPLE === EXERCISES.HOC && <HocIntro />}
        {ACTIVE_EXAMPLE === EXERCISES.RENDER_PROPS && <RenderPropsIntro />}
      </>
    )
  }

  render() {
    return (
      <AppContent>
        {MODE === MODES.INTRO && this.renderIntro()}
        {MODE === MODES.EXERCISE && this.renderExercice()}
        {MODE === MODES.FINAL && this.renderFinal()}
      </AppContent>
    );
  }
}

const AppContent = styled.div`
  max-width: 800px;
  min-height: 80vh;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
  margin: 32px auto;
`;

export default App;
