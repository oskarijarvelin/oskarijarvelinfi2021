import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navlink.module.scss'

export default function Navlink({ href, children }) {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} active`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}