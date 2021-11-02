import style from "./Header.module.css"

export default function Header({text}){
    return(
        <div className={style.navbar}>
             <h2 className={style.title}>{text}</h2>
        </div>
    ) 
}