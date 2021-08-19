trigger mytrigger on Student__c (before insert) {
	list<Student__c> sts = trigger.new;
    for(Student__c st:sts){
        system.debug(st.name);
        system.debug([select name from student__c where name=:st.name]);
    }
}