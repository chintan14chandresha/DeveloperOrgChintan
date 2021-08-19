<aura:application
        extends="ltng:outApp"
        access="global"
        description="AccountSummaryApp"
                  >

    <aura:attribute name="recordId" type="String" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <div>
        <div>
            <lightning:button label="Print" onclick="{!c.print}" class="print-hide" />            
            </div>
    </div>

</aura:application>