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

        const {favoriteSize=30, favoriteItemLength=0} = this.props;
        let cssProperties = { }
        cssProperties['--counter-size'] = favoriteSize/20 + "rem"
        
        return (
            <div className="primary_favorite" data-testid="favorite" style={cssProperties} onClick={e=>this.props.favoriteCbk()}>
                <Heart className="primary_favorite_icon" size={favoriteSize} />
                <div className="primary_favorite_counter" >{favoriteItemLength}</div>
            </div>
        )
    }

}

export type FavoriteProps = {
    /**
     * favorite size defines the size of component on different screen.
     */
     favoriteSize: number;
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