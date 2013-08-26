(function() {
    var ticket_field = $('#id_ticket_number');
    var description_field = $('#id_description');
    $(ticket_field).on('change', function(){
        if (this.value && this.value != '0') {
            console.log("fetching data..");
            NProgress.start();
            $.get('/redmine/?ticket=' + this.value, function(data){ 
                if (data.status == 200) {
                    $(description_field).val(data.ticket.subject);
                } else {
                    $(description_field).val("Invalid Ticket number!");
                }
                NProgress.done();
            });
        };
    });

    var dataTable_config = {
        // common datatable config to be used across tables
        "bPaginate" : false,
        "bInfo": false
    }

    var seven_day_table = $('#seven_day_table');
    var activities_table = $('#activities_table');
    if (seven_day_table) {
        $(seven_day_table).dataTable(dataTable_config);
    }

    if (activities_table) {
        $(activities_table).dataTable(dataTable_config);
    }
})();
