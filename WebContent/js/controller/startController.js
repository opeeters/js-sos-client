/*
 * Copyright (C) 2014-2014 52°North Initiative for Geospatial Open Source
 * Software GmbH
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 as published
 * by the Free Software Foundation.
 *
 * If the program is linked with libraries which are licensed under one of
 * the following licenses, the combination of the program with the linked
 * library is not considered a "derivative work" of the program:
 *
 *     - Apache License, version 2.0
 *     - Apache Software License, version 1.0
 *     - GNU Lesser General Public License, version 3
 *     - Mozilla Public License, versions 1.0, 1.1 and 2.0
 *     - Common Development and Distribution License (CDDL), version 1.0
 *
 * Therefore the distribution of the program linked with libraries licensed
 * under the aforementioned licenses, is permitted by the copyright holders
 * if the distribution is compliant with both the GNU General Public
 * License version 2 and the aforementioned licenses.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
 * Public License for more details.
 */
var StartController = {

	init : function() {
		// analyze url parameter		
		var timespan = this.getUrlParameter('timespan');
		if(timespan) {
			Status.set('timespan', Time.createTimespan(timespan));
		}
		var timeseries = this.getUrlParameter('timeseries');
		if(timeseries != null) {
			Status.clearTimeseries();
			$.each(timeseries.split(','), function(idx, id) {
				Status.addTimeseriesById(id);
			});
		}
		// Call all controller
		jQuery.support.cors = true;
		Pages.init();
		Map.init();
		ListSelectionController.init();
		SettingsController.init();
		LegendController.init();
		TableController.init();
		TimeController.init();
		ChartController.init();
		TimeSeriesController.init();
		
		// test
//		ListSelectionController.open();
	},
	
	getUrlParameter : function (sParam) {
		var sPageURL = window.location.search.substring(1);
		var parameters = sPageURL.split('&');
		for (var i = 0; i < parameters.length; i++){
			var sParameterName = parameters[i].split('=');
			if (sParameterName[0] == sParam) {
				return sParameterName[1];
			}
		}
	}
};