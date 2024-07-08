import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  phone_number: string;
  access_code: string;
  fieldRequired: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Your Phone Number</h3>
        <input
          placeholder="Input your phone number"
          {...register("phone_number", { required: true })}
        />
      </div>
      <div>
        <h3>Your Access Code</h3>
        <input
          placeholder="Input your access code"
          {...register("access_code", { required: true })}
        />
      </div>
      <div>{errors.fieldRequired && <span>This field is required</span>}</div>
      <br />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
