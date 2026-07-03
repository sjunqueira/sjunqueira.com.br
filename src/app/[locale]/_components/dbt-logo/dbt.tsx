type DbtLogoProps = {
  className?: string;
};

export default function DbtLogo({ className }: DbtLogoProps) {
  return (
    <img
      src="/dbt.svg"
      alt="dbt Logo"
      className={className}
      width={32}
      height={32}
    />
  );
}