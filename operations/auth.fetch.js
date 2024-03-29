export async function sendOtp(formData) {
    return await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        return res.json();
    });
}
export async function registerIn(formData) {
    return fetch("/api/entryExit/entry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}
export async function registerOut(formData) {
    return fetch("/api/entryExit/exit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}
export async function register(formData) {
    return fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
}

export async function passwordOtp(formData) {
    return fetch("/api/auth/password-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        return res.json();
    });
}

export async function changePassword(formData) {
    return fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        return res.json();
    });
}

export async function updateCollegeName(formData) {
    return fetch("/api/auth/update-college", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        return res.json();
    });
}

export async function updatePhone(formData) {
    return fetch("/api/auth/update-phone", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => {
        return res.json();
    });
}
