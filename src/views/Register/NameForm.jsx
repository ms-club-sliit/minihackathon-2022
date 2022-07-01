import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const memberSchema = yup.object().shape({
    teamName: yup.string().required("Team Name is required."),
    count: yup.number().required("Please enter the team size.").min(3, "Team size needs to be 3 or 4.").max(4)
}); 


function NameForm({ formKey, handleSubmitFunc, width }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(memberSchema)
    });

    useEffect(() => {
        handleSubmitFunc && handleSubmitFunc(formKey, () => {
            return new Promise((resolve, reject) => {
                handleSubmit((data) => {
                    resolve(data);
                }, () => {
                    resolve(null);
                })();
            })
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="h-full" style={{ width: width || "20%" }}>
            <h1 className="text-xl font-bold text-center">Team details</h1>
            <label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                Team Name
            </label>
            <input
                {...register("teamName")}
                type="text"
                placeholder="Team Name"
                className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
            />
            <p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">{errors.teamName?.message}</p>

            <label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                Team Size
            </label>
            <select
                    {...register("count")}
                    defaultValue=""
                    className="border-2 border-black rounded mb-[0.1em] py-1 px-1 cursor-pointer w-full"
                >
                <option value="0">Choose</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">{errors.count?.message}</p>
        </div>
    )
}

export default NameForm;