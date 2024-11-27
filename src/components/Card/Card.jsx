import image from '/src/assets/card600.jpg'
import Button from '../ui/Button.jsx'
import style from './Card.module.css'

export default function Card() {
    return (
        <div className={style.card}>
            <div className={style.image}>
                <img className={style.thumb} src={image} alt="" />
            </div>
            <div className={style.body}>
                <h3>Titolo del post</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit, optio laborum fuga sunt non dolores corrupti distinctio eveniet eius earum sint eaque suscipit itaque commodi, consequatur nobis minima! Nisi!</p>
                <Button />
            </div>
        </div>
    )
}