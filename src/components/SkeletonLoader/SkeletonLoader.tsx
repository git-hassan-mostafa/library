import s from './SkeletonLoader.module.css'
export default function SkeletonLoader() {
    return (
        <div>
            <div className={s["page__container"]}>
                <div className={s["header"]}>
                    <h1 id={s["header__title"]}>CSS Grid Card Skeleton Screen</h1>
                    <h2 id={s["header__description"]}>Example of a skeleton screen for a card loader using CSS Grid and Custom Properties.</h2>
                    <div className={s["divider"]}></div>
                </div>
                <div id="grid" className={s["skeleton"]}>
                    <div className={s["card"]}></div>
                    <div className={s["card"]}></div>
                    <div className={s["card"]}></div>
                    <div className={s["card"]}></div>
                </div>
            </div>

        </div>
    )
}
