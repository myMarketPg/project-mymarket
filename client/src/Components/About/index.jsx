import style from './About.module.css';
import Button from './Button';

export default function About () {
    return (
        <div className={style.about}>
            <p className={style.title}>About</p>
            <br></br>
            <p className={style.p}>We are a company focused on e-commerce and online product sales.</p>
            <p className={style.p}>Our goal is to reach as many customers as possible, offering them</p>
            <p className={style.p}> a simple and practical solution.</p>
            <br></br>
            <p className={style.p}>Somos una empresa enfocada en el comercio electrónico</p>
            <p className={style.p}> y la venta de productos en línea.</p>
            <p className={style.p}>Nuestro objetivo es llegar al mayor número de clientes posible,</p>
            <p className={style.p}> ofreciéndoles una solución sencilla y práctica.</p>
            <br></br>
            <Button />
        </div>
    )
}