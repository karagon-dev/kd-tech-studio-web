import logo from '../../assets/logo.png';
import logoOnDark from '../../assets/logo-on-dark.png';
import './Logo.scss';

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <span className={`logo${inverted ? ' logo--inverted' : ''}`}>
      <img src={inverted ? logoOnDark : logo} alt="" className="logo__img" />
      <span className="logo__sr">KD Tech Studio</span>
    </span>
  );
}
