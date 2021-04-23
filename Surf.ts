class Surf: ProberListener {

	constructor(proxyManager: ProxyManager, proberContainer: ProberContainer) {
		this.proberContainer = proberContainer;
		this.proxyManager = proxyManager;
	}
	
	/**
	 * 添加站点
	 */
	addSite(site) {
		this.proberContainer.add(new HttpProber(site, this));
	}

	/**
	 * 探针测试结束
     *
     * 使用代理速度较快的策略，代理或者不使用代理
	 */
	onProbeCompleted(prober) {
		this.proxyManager.apply(prober.factor);
		this.proberContainer.probeCompleted(prober);
	}
}
