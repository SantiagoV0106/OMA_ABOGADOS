/* eslint-disable react/prop-types */

import { Button } from '../Button/Button'

export function HeroTitle({
    className,
    subTitle,
    title,
    desc,
    btnClassname,
    btnIcon,
    btnName }) {
    return (
        <div className={className}>
        <h3>{subTitle}</h3>
        <h1>{title}</h1>
        <p>{desc}</p>
        <Button className={btnClassname} icon={btnIcon} name={btnName} />
    </div>
    )
}