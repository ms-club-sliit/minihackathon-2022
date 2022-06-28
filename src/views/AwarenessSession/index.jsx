import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerAwarenessSession } from "../../api/register";
import { useState } from "react";

const awarenessSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().email().required("Email is required."),
    contact_no: yup.string().matches(/[0-9]+/gi, "Enter Numbers only.").min(10, "Contact Number must be at least 10 digits").required("Contact no is required"),
    it_no: yup.string().required("IT number is required."),
    academic_year: yup.string().required("Academic Year is required."),
    faculty: yup.string().required("Faculty is required.")
}); 

function AwarenessSession() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(awarenessSchema)
    });
    const [status, setStatus] = useState({ state: "none", message: "" });

    const onSubmit = async (member_data) => {
        try{
            setStatus({ state: "loading", message: "Please wait."});
            
            await registerAwarenessSession(member_data);

            setStatus({ state: "success", message: "Success, You successfully registered for Awareness session."});
            
            setTimeout(() => {
                setStatus({ state: "none", message: "" });
                reset();
            }, 3000);
        }catch(error){
            setStatus({ state: "error", message: "Failed to register, Something went wrong. Try again later"});

            setTimeout(() => {
                setStatus({ state: "none", message: "" });
                reset();
            }, 5000);
        }
    }
    
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <h1 className="text-center font-bold text-4xl mb-[1.5em]">Awareness Session Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[32em] rounded-xl pt-[4em] pb-[3em] px-[3em] background-shade-1 shadow-xl relative">
                    <div className={`${ status.state === "error" ? "bg-red-400" : "bg-green-400" } ${ status.state === "none" ? "hidden" : "" } absolute flex justify-center items-center top-0 right-0 w-full h-full rounded-xl p-[3em]`}>
                        <p className="text-center font-bold text-4xl mb-[1.5em]">{ status.message }</p>
                    </div>
                    <label className="block text-white font-light text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                        Name
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        className="bg-gray-200 border-2 rounded mb-[0.1em] px-2 py-1"
                        size={40}
                    />
                    <p className="text-red-500 text-sm font-semibold h-[1rem] italic">{errors.name?.message}</p>

                    <label className="block text-white font-light text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                        Email
                    </label>
                    <input
                        {...register("email")}
                        type="text"
                        placeholder="Email"
                        className="bg-gray-200 border-2 rounded mb-[0.1em] px-2 py-1"
                        size={40}
                    />
                    <p className="text-red-500 text-sm font-semibold h-[1rem] italic">{errors.email?.message}</p>

                    <label className="block text-white font-light text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                        Contact Number
                    </label>
                    <input
                        {...register("contact_no")}
                        type="text"
                        placeholder="Contact No"
                        className="bg-gray-200 border-2 rounded mb-[0.1em] px-2 py-1"
                        size={40}
                    />
                    <p className="text-red-500 text-sm font-semibold h-[1rem] italic">{errors.contact_no?.message}</p>

                    <label className="block text-white font-light text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                        IT Number
                    </label>
                    <input
                        {...register("it_no")}
                        type="text"
                        placeholder="IT Number"
                        className="bg-gray-200 border-2 rounded mb-[0.1em] px-2 py-1"
                        size={40}
                    />
                    <p className="text-red-500 text-sm font-semibold h-[1rem] italic">{errors.it_no?.message}</p>

                    <label className="block text-white font-light text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                        Academic Year
                    </label>
                    <select
                            {...register("academic_year")}
                            defaultValue=""
                            className="bg-gray-200 border-2 rounded mb-[0.1em] py-1 px-1 cursor-pointer min-w-[13em]"
                        >
                        <option value="">Choose</option>
                        <option value="Year 01 Semester 01">Year 01 Semester 01</option>
                        <option value="Year 01 Semester 02">Year 01 Semester 02</option>
                        <option value="Year 02 Semester 01">Year 02 Semester 01</option>
                        <option value="Year 02 Semester 02">Year 02 Semester 02</option>
                        <option value="Year 03 Semester 01">Year 03 Semester 01</option>
                    </select>
                    <p className="text-red-500 text-sm font-semibold h-[1rem] italic">{errors.academic_year?.message}</p>

                    <label className="block text-white font-light text-[1em] md:text-left mb-1 md:mb-0 pr-4">
                        Faculty
                    </label>
                    <select
                        {...register("faculty")}
                        defaultValue=""
                        className="bg-gray-200 border-2 rounded mb-[0.1em] py-1 cursor-pointer min-w-[13em]"
                    >
                        <option value="" >Choose</option>
                        <option value="Faculty of Computing">Faculty of Computing</option>
                        <option value="Faculty of Engineering">Faculty of Engineering</option>
                        <option value="Faculty of Business">Faculty of Business</option>
                    </select>
                    <p className="text-red-500 text-sm font-semibold h-[1rem] italic">{errors.faculty?.message}</p>

                    <br></br>
                </div>
                <div className="w-full flex items-center justify-center">
                    <button type="submit" disabled={ status.state === "success" } className="mt-4 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}


export default AwarenessSession;