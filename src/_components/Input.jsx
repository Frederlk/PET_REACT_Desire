import React from "react";
import { useField } from "formik";

const Input = ({ textarea, refed, ...props }) => {
    const [field, meta] = useField({ ...props, type: "textarea" });
    const classNames = `input ${props.className || ""} ${meta.touched && meta.error ? "_error" : ""}`;

    return (
        <>
            {textarea ? (
                <textarea ref={refed} {...props} {...field} className={classNames}></textarea>
            ) : (
                <input {...props} {...field} className={classNames} />
            )}

            {meta.touched && meta.error ? <div className="input__error">{meta.error}</div> : null}
        </>
    );
};

export default Input;
