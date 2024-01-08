import style from './Botao.module.scss';
import React, { PropsWithChildren } from 'react';


class Botao extends React.Component<PropsWithChildren> {
    render() {
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
            )
        }
}

export default Botao;