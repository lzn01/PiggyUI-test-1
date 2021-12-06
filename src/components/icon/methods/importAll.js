const importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context("../../../assets/iconfont/", true, /\.svg$/));
} catch (error) {
    console.log(error);
}