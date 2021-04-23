export default interface ProberContainer {
	add(prober: Prober);

	remove(prober: Prober);

	
	/**
	 * 探针结束
	 *
	 * 探针会根据特定策略持续嗅探站点的响应速度。因为长时间运行，也会在适当的时间销毁或启动探针，类似一个gc的过程。
	 */
	proberCompleted(prober: Prober): void;
}
