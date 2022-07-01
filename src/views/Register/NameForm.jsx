import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const memberSchema = yup.object().shape({
    teamName: yup.string().required("Team Name is required."),
}); 


function NameForm({ formKey, handleSubmitFunc }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(memberSchema)
    });

    useEffect(() => {
        handleSubmitFunc && handleSubmitFunc(formKey, () => {
            return new Promise((resolve, reject) => {
                handleSubmit((data) => {
                    resolve(data.teamName);
                }, () => {
                    resolve(null);
                })();
            })
        });
    }, []);

    return (
        <div className="w-[20%] h-full">
            <label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                Team Name
            </label>
            <input
                {...register("teamName")}
                type="text"
                placeholder="Team Name"
                className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
            />
            <p className="text-red-500 text-sm font-semibold h-[1rem] italic">{errors.teamName?.message}</p>
        </div>
    )
}

export default NameForm;