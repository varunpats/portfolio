"use server"

export const sendEmail = async (formData: FormData) => {
    console.log(formData.get("email"))
    console.log(formData.get("message"))
}