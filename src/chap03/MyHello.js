import PropTypes from 'prop-types';

function MyHello(props) {
    return(
        <div>テストじゃ{props.myName}jilya</div>
    );
}

MyHello.propTypes = {
  myName:PropTypes.string.isRequired
};

export default MyHello;