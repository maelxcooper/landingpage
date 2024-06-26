function initializefooterSwap() {
    const resizeHandler = () => {
        if (window.innerWidth <= 1000) {
            $('.soc-med').insertAfter('.num-add');
        } else {
            $('.soc-med').insertAfter('.ftr_map');
        }
    };
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
}
