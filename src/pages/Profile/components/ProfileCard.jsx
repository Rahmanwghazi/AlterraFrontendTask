import style from "./ProfileCard.module.css"

export default function ProfileCard({ user }) {
    return (
        <div className={style.card}>
            <img className={style.avatar} src={user.avatar} alt="ava"></img>
            <div className={style.cardContent}>

                <h5>{user.first_name} {user.last_name}</h5>
                <p>{user.email}</p>

            </div>
        </div>
    )

}