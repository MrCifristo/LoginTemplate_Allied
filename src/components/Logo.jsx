import PropTypes from 'prop-types';

const Logo = () => {
    const src = "https://media.tenor.com/BIn4gjem0LQAAAAj/naruto-hungry.gif";
    const alt = "Company Name";

    return (
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src={src} alt={alt} />
            {alt}
        </a>
    );
};

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Logo;
