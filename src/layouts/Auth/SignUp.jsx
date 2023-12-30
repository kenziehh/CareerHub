import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    getValues,
  } = useForm();
  const navigate = useNavigate();

  return (
    <div className="flex gap-12">
      <div className="hidden md:flex justify-center items-center">
        <img src="/assets/images/signin-image.png" />
      </div>

      <div className="w-[250px] md:w-full space-y-8">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Daftar</h4>
          {/* <button onClick={() => {}}>
            <MdClose />
          </button> */}
        </div>

        <form onSubmit={handleSubmit()} className="space-y-8">
          <div className="grid lg:grid-cols-2 flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="h5 font-semibold">Nama</label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="John Doe"
                className="border rounded-xl border-black/40 py-2 px-4 min-w-[15.625rem]"
              />
              {errors.name && (
                <p className="text-red-500">{`${errors.name.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="h5 font-semibold">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="ya@gmail.com"
                className="border rounded-xl border-black/40 py-2 px-4 min-w-[15.625rem]"
              />
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="h5 font-semibold">Pendidikan</label>
              <input
                {...register("pendidikan", {
                  required: "Pendidikan is required",
                })}
                type="text"
                placeholder="Pilih salah satu"
                className="border rounded-xl border-black/40 py-2 px-4 min-w-[15.625rem]"
              />
              {errors.pendidikan && (
                <p className="text-red-500">{`${errors.pendidikan.message}`}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="h5 font-semibold">Minat</label>
              <input
                {...register("minat", {
                  required: "Minat is required",
                })}
                type="text"
                placeholder="Pilih salah satu"
                className="border rounded-xl border-black/40 py-2 px-4 min-w-[15.625rem]"
              />
              {errors.minat && (
                <p className="text-red-500">{`${errors.minat.message}`}</p>
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
                className="border rounded-xl border-black/40 py-2 px-4 min-w-[15.625rem]"
              />
              {errors.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="h5 font-semibold">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === getValues("password") || "Password must match",
                })}
                placeholder="re-enter password"
                className="border rounded-xl border-black/40 py-2 px-4 min-w-[15.625rem]"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Button variant="default" className="w-full" onClick={() => navigate("?showDialog=y&type=signin")}>
              Daftar
            </Button>
            <Button
              variant="disabled"
              className="w-full"
              onClick={() => navigate("?showDialog=y&type=signin")}
            >
              Sudah Punya Akun?
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
