import FieldSet from '../components/FieldSet'
import Field from '../components/Field'
import NumberInput from '../components/NumberInput'
import { useForm, useFieldArray, Controller } from "react-hook-form"

const RegistrationForm = () => {
    const {register, handleSubmit, formState:{errors}, setError, control} = useForm()

    const { fields, append, remove} = useFieldArray({
        name: "socials",
        control
    })

    const submitForm = (formData) => {
        console.log(formData)

    }


    return (
        <div className='flex flex-col justify-center items-center'>

            <form onSubmit={handleSubmit(submitForm)}>
                <FieldSet label="Enter Your Details">
                    <Field label="Email" error={errors.email}>
                        
                        <input {...register("email", {required: "Email is required"})} 
                            className={`p-2 border box-border w-[300px] rounded-md ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                            type="email" 
                            name='email' 
                            id="email" 
                            placeholder='Enter Email' />
                    </Field>


                    <Field label="Password" error={errors.password}>
                        
                        <input {...register("password", {required: "Password is required", 
                                minLength: {value: 8, message: "Your password must be 8 character"}})} 
                            className={`p-2 border box-border w-[300px] rounded-md ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                            type="password" 
                            name='password' 
                            id="password" 
                            placeholder='Enter password' />
                    </Field>

                    <Field label="Full Name" error={errors.fname}>
                        
                        <input {...register("fname", {required: "Full Name is required"})} 
                            className={`p-2 border box-border w-[300px] rounded-md ${errors.fname ? 'border-red-500' : 'border-gray-200'}`}
                            type="text" 
                            name='fname' 
                            id="fname" 
                            placeholder='Enter Your Full Name' />
                    </Field>


                    <Field label="Age" error={errors.age}>

                        

                        <Controller
                            name="age"
                            control={control}
                            defaultValue={1}
                            render={
                                ({field: {ref, ...field}}) => (
                                    <NumberInput 
                                        id="age"
                                        className={`p-2 border box-border w-[300px] rounded-md ${errors.age ? 'border-red-500' : 'border-gray-200'}`}
                                        {...field}
                                    />
                                )
                            }
                            rule={{
                                max:{
                                    value: 100,
                                    message: "Age must be between 0 and 100"
                                }
                            }}
                        />
                        
                        {/* <input {...register("age", {required: "Age required", max:{
                                    value: 100,
                                    message: "Age must be between 0 and 100"
                                }})} 
                            className={`p-2 border box-border w-[300px] rounded-md ${errors.age ? 'border-red-500' : 'border-gray-200'}`}
                            type="number" 
                            name='age' 
                            id="age" 
                            placeholder='Enter Your Age' /> */}
                    </Field>


                    <Field label="Picture" error={errors.picture}>
                        
                        <input {...register("picture", {required: "Picture is required"})} 
                            className={`p-2 border box-border w-[300px] rounded-md ${errors.picture ? 'border-red-500' : 'border-gray-200'}`}
                            type="file" 
                            name='picture' 
                            id="picture" 
                        />
                    </Field>

                </FieldSet>


                <FieldSet label="Enter Your Socials Handels">

                    {
                        fields.map((field, index) => {
                            return(
                                <div key={field.id} className='flex justify-between items-center w-max'>
                                    <Field label="Social Name">
                        
                                        <input {...register(`socials[${index}].name`)} 
                                            className={`p-2 border box-border w-[300px] rounded-md border-gray-200}`}
                                            type="text" 
                                            name={`socials[${index}].name`}
                                            id={`socials[${index}].name`}
                                            placeholder='Provide Social Name'
                                            />
                                    </Field>

                                    <Field label="Social Url">
                        
                                        <input {...register(`socials[${index}].url`)} 
                                            className={`p-2 border box-border w-[300px] rounded-md border-gray-200}`}
                                            type="text" 
                                            name={`socials[${index}].url`}
                                            id={`socials[${index}].url`}
                                            placeholder='Provide URL'
                                            />
                                    </Field>

                                    <button className='text-md text-white cursor-pointer border rounded-lg bg-gray-500' 
                                        onClick={() => remove(index)}>
                                            Remove
                                    </button>
                                </div>
                            )
                        })
                    }


                    <button className='mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto' 
                        onClick={() => append({name:"", url:""})}>
                            Add a Social Handel
                    </button>


                </FieldSet>

                <div>
                    {errors?.root?.random?.message}
                </div>

                <Field>
                    <button className='text-md text-white cursor-pointer p-1 border rounded bg-purple-500'>Register</button>
                </Field>
            </form>


        </div>
    )
}

export default RegistrationForm