import React, { Fragment } from "react"
import { Heart } from 'react-bootstrap-icons';
import "./Favorite.scss"


/**
 * This component tells how many items are there in user cart
 */
export default class Favorite extends React.Component<FavoriteProps>{

    constructor(props: FavoriteProps) {
        super(props);
        this.state = {};
    }


    render () {

        const {size=2, sizeUnit="rem", favoriteItemLength=0} = this.props;
        let cssProperties: {"--size": String, "--icon-size":String} = {"--size": String(size) + sizeUnit, "--icon-size":String(size*1.3) + sizeUnit }
        
        return (
            <div className="primary_favorite" data-testid="favorite" style={cssProperties} onClick={e=>this.props.favoriteCbk()}>
                <Heart className="primary_favorite_icon"/>
                <div className="primary_favorite_counter" >{favoriteItemLength}</div>
            </div>
        )
    }

}

export type FavoriteProps = {
    /**
     * Size defines the size of component on different screen.
     */
     size: number;
     /**
      * Define unit of size
      */
     sizeUnit: String;
     /**
      * favorite item length tells the number of item in user favorite.
      */
    favoriteItemLength: number;
      /**
     * Emits observables on favorite click. This callback can be listened, using subscribe,
     * to get user input and call api from it. Further operators like throttle, map etc can be applied
     * on the emitted observable
     */
    favoriteCbk: () => void;
    
}