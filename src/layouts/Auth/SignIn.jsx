import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // getValues,
  } = useForm();
  const navigate = useNavigate();

  return (
    <div className="flex gap-12">
      <div className="hidden md:flex justify-center items-center">
        <img src="/assets/images/signin-image.png" />
      </div>

      <div className="w-[250px] space-y-8">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Masuk</h4>
          {/* <button onClick={() => {}}>
            <MdClose />
          </button> */}
        </div>

        <form onSubmit={handleSubmit()}>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="h5 font-semibold">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
                placeholder="ya@gmail.com"
                className="border rounded-xl border-black/40 py-2 px-4"
              />
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="h5 font-semibold">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type="password"
                placeholder="password"
                className="border rounded-xl border-black/40 py-2 px-4"
              />
              {errors.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
              )}
            </div>
            <Link className="h5 font-semibold self-end">Lupa Password</Link>
            <Button variant="default">Masuk</Button>

            <Button
              variant="disabled"
              onClick={() => navigate("?showDialog=y&type=signup")}
            >
              Belum Punya Akun?
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
