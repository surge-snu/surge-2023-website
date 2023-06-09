import { useState } from "react";

export default function useForm(props) {
    const [fields] = useState(new Set(Object.keys(props.initialValues)));
    const [formData, setFormData] = useState(props.initialValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState(
        {
            friendlyName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    );
    setErrors(
        Object.keys(props.initialValues).reduce(
            (prev, val) => ({ ...prev, [val]: null }),
            {}
        )
    )

    const hasError = (err = errors) => Object.entries(err).some(([, val]) => val);

    const onChange = async (fieldName, e) => {
        setErrors({});
        const newData = { ...formData, [fieldName]: e.target.value.trim() };
        if (typeof props.validate === "function") {
            const validationErrors = await validate(newData);
            if (hasError(validationErrors)) setErrors(validationErrors);
        }
        setFormData(newData);
        if (typeof props.onChangeError === "function") onChangeError(errors);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);

        props.onSubmit(formData);
    }

    return {
        fields,
        errors,
        formData,
        onChange,
        isSubmitting,
        handleSubmit,
    };
}
