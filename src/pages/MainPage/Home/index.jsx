import IconsContact from '../../../components/IconsContact';
import MiniGame from './MiniGame';
import { HomeTabContainer, MainTitle, Object3DContainer, StyledArrow } from './styles';

const Home = ({goTo, innerRef, nextRef}) => {
    return (
        <div ref={innerRef}>
            <HomeTabContainer>
                <MainTitle>
                    <h1>Gabriel de Paula</h1>
                    <h2>Developer and 3D Modelator</h2>
                    <IconsContact/>
                </MainTitle>
                <Object3DContainer>
                    <MiniGame/>
                </Object3DContainer>
                <StyledArrow onClick={() => goTo(nextRef)}/>
            </HomeTabContainer>
        </div>
    );
}

export default Home;