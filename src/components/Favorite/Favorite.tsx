import React from "react"
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

        const {size=2, sizeUnit="rem", favoriteItemCount: favoriteItemLength=0} = this.props;
        let iconSize: string = String(size*1.3) + sizeUnit
        let counterSize: string = String(size) + sizeUnit
        
        return (
            <div className="primary_favorite" data-testid="favorite" onClick={e=>this.props.favoriteCbk()}>
                <Heart className="primary_favorite_icon" style={{width: iconSize, height:iconSize}}/>
                <div className="primary_favorite_counter" style={{width:counterSize, height:counterSize, lineHeight: counterSize}}>{favoriteItemLength}</div>
            </div>
        )
    }

}

export type FavoriteProps = {
    /**
     * Size defines the size of component on different screen.
     */
     size?: number;
     /**
      * Define unit of size
      */
     sizeUnit?: String;
     /**
      * favorite item length tells the number of item in user favorite.
      */
    favoriteItemCount: number;
      /**
     * Emits observables on favorite click. This callback can be listened, using subscribe,
     * to get user input and call api from it. Further operators like throttle, map etc can be applied
     * on the emitted observable
     */
    favoriteCbk: () => void;
    
}