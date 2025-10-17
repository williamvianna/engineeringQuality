import styles from "@/app/page.module.css";
import {SaveIcon} from "lucide-react";

export function UnsavedIcon(props) {
    return (
        <div className={styles.unsavedicon} style={{color: (props.rgba ? `#${props.rgba}` : '')}}>
            <span className={styles.risk} style={{backgroundColor: (props.rgba ? `#${props.rgba}` : '')}}></span>
            <SaveIcon/>
        </div>
    )
}
