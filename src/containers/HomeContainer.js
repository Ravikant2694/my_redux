import {connect} from 'react-redux'
import Home from "../components/Home";
import {addToCart} from '../services/actions/actions'
import {removeToCart} from '../services/actions/actions'

const mapStateToProps = state => ({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data)),
    removeToCartHandler:data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;









