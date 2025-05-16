namespace Bnet.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addColPaymentModeTblPrescHistory : DbMigration
    {
        public override void Up()
        {
            MoveTable(name: "Bnet.Region", newSchema: "Shelly");
            MoveTable(name: "Bnet.Customer", newSchema: "Shelly");
            MoveTable(name: "Bnet.Zone", newSchema: "Shelly");
            MoveTable(name: "Bnet.Error", newSchema: "Shelly");
            MoveTable(name: "Bnet.Role", newSchema: "Shelly");
            MoveTable(name: "Bnet.SMS", newSchema: "Shelly");
            MoveTable(name: "Bnet.UserRole", newSchema: "Shelly");
            MoveTable(name: "Bnet.User", newSchema: "Shelly");
            MoveTable(name: "Bnet.UserRegion", newSchema: "Shelly");
            MoveTable(name: "Bnet.SMSGroup", newSchema: "Shelly");
            DropForeignKey("Bnet.Operator", "Region_ID", "Bnet.Region");
            DropForeignKey("Bnet.Assignee", "OperatorId", "Bnet.Operator");
            DropForeignKey("Bnet.Enquiry", "OperatorId", "Bnet.Operator");
            DropForeignKey("Bnet.Comments", "CommentId", "Bnet.Enquiry");
            DropForeignKey("Bnet.Customer", "FormSubmitterId", "Bnet.Operator");
            DropForeignKey("Bnet.Customer", "OperatorId", "Bnet.Operator");
            DropForeignKey("Bnet.Plan", "ZoneId", "Bnet.Zone");
            DropForeignKey("Bnet.Customer", "PlanId", "Bnet.Plan");
            DropForeignKey("Bnet.Issue", "CurrentOwner", "Bnet.Operator");
            DropForeignKey("Bnet.Ticket", "CustomerId", "Bnet.Customer");
            DropForeignKey("Bnet.Ticket", "OperatorId", "Bnet.Operator");
            DropForeignKey("Bnet.Status", "TicketId", "Bnet.Ticket");
            DropForeignKey("Bnet.SMS", "Ticket_ID", "Bnet.Ticket");
            DropForeignKey("Bnet.User", "OperatorId", "Bnet.Operator");
            DropForeignKey("Bnet.UserZone", "ZoneId", "Bnet.Zone");
            DropForeignKey("Bnet.UserZone", "UserId", "Bnet.User");
            DropForeignKey("Bnet.Payment", "CustomerId", "Bnet.Customer");
            DropForeignKey("Bnet.Payment", "OperatorId", "Bnet.Operator");
            DropForeignKey("Bnet.Payment", "PlanId", "Bnet.Plan");
            DropForeignKey("Bnet.CustomerBackup", "OperatorId", "Bnet.Operator");
            DropForeignKey("Bnet.Permission", "PageId", "Bnet.Pages");
            DropIndex("Bnet.Assignee", new[] { "OperatorId" });
            DropIndex("Bnet.Operator", new[] { "Region_ID" });
            DropIndex("Bnet.Comments", new[] { "CommentId" });
            DropIndex("Bnet.Enquiry", new[] { "OperatorId" });
            DropIndex("Shelly.Customer", new[] { "OperatorId" });
            DropIndex("Shelly.Customer", new[] { "FormSubmitterId" });
            DropIndex("Shelly.Customer", new[] { "PlanId" });
            DropIndex("Bnet.Plan", new[] { "ZoneId" });
            DropIndex("Bnet.Issue", new[] { "CurrentOwner" });
            DropIndex("Shelly.SMS", new[] { "Ticket_ID" });
            DropIndex("Bnet.Ticket", new[] { "CustomerId" });
            DropIndex("Bnet.Ticket", new[] { "OperatorId" });
            DropIndex("Bnet.Status", new[] { "TicketId" });
            DropIndex("Shelly.User", new[] { "OperatorId" });
            DropIndex("Bnet.UserZone", new[] { "UserId" });
            DropIndex("Bnet.UserZone", new[] { "ZoneId" });
            DropIndex("Bnet.Payment", new[] { "CustomerId" });
            DropIndex("Bnet.Payment", new[] { "OperatorId" });
            DropIndex("Bnet.Payment", new[] { "PlanId" });
            DropIndex("Bnet.CustomerBackup", new[] { "OperatorId" });
            DropIndex("Bnet.Permission", new[] { "PageId" });
            CreateTable(
                "Shelly.Medicine",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Shelly.PaymentMode",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Shelly.PrescriptionHistory",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        CustomerID = c.Int(nullable: false),
                        Potency = c.String(),
                        AmountConsultation = c.Decimal(precision: 18, scale: 2),
                        AmountMedicine = c.Decimal(precision: 18, scale: 2),
                        RegDate = c.DateTime(nullable: false),
                        AddedBy = c.String(),
                        UpdatedBy = c.String(),
                        FollowUpDate = c.DateTime(),
                        Note = c.String(),
                        PrescriptionTypeId = c.Int(),
                        PrescriptionId = c.Int(),
                        MedicineId = c.Int(),
                        PaymentModeId = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("Shelly.Customer", t => t.CustomerID, cascadeDelete: true)
                .ForeignKey("Shelly.Medicine", t => t.MedicineId)
                .ForeignKey("Shelly.PaymentMode", t => t.PaymentModeId)
                .ForeignKey("Shelly.Prescription", t => t.PrescriptionId)
                .ForeignKey("Shelly.PrescriptionType", t => t.PrescriptionTypeId)
                .Index(t => t.CustomerID)
                .Index(t => t.PrescriptionTypeId)
                .Index(t => t.PrescriptionId)
                .Index(t => t.MedicineId)
                .Index(t => t.PaymentModeId);
            
            CreateTable(
                "Shelly.Prescription",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Shelly.PrescriptionType",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Shelly.SMSGroupMembers",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Number = c.String(),
                        SMSGroupId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("Shelly.Customer", "CaseNumber", c => c.String());
            AddColumn("Shelly.Customer", "Gender", c => c.String());
            AddColumn("Shelly.Customer", "Address", c => c.String());
            AlterColumn("Shelly.SMSGroup", "IsCustom", c => c.Boolean());
            DropColumn("Shelly.Customer", "CustomerId");
            DropColumn("Shelly.Customer", "State");
            DropColumn("Shelly.Customer", "City");
            DropColumn("Shelly.Customer", "Area");
            DropColumn("Shelly.Customer", "PinCode");
            DropColumn("Shelly.Customer", "DueDate");
            DropColumn("Shelly.Customer", "Amount");
            DropColumn("Shelly.Customer", "Status");
            DropColumn("Shelly.Customer", "IsRouter");
            DropColumn("Shelly.Customer", "Comment");
            DropColumn("Shelly.Customer", "Monitoring");
            DropColumn("Shelly.Customer", "Type");
            DropColumn("Shelly.Customer", "ServerID");
            DropColumn("Shelly.Customer", "ServerIP");
            DropColumn("Shelly.Customer", "FormCollectedDate");
            DropColumn("Shelly.Customer", "FormRecDate");
            DropColumn("Shelly.Customer", "FormTransferredDate");
            DropColumn("Shelly.Customer", "FormReceivedBy");
            DropColumn("Shelly.Customer", "FormTransferredTo");
            DropColumn("Shelly.Customer", "FormCollectedBy");
            DropColumn("Shelly.Customer", "FormAmount");
            DropColumn("Shelly.Customer", "FormRecieved");
            DropColumn("Shelly.Customer", "FormBalance");
            DropColumn("Shelly.Customer", "FormOutstanding");
            DropColumn("Shelly.Customer", "FormIsTransferred");
            DropColumn("Shelly.Customer", "FormStatus");
            DropColumn("Shelly.Customer", "CAF");
            DropColumn("Shelly.Customer", "ConnectionType");
            DropColumn("Shelly.Customer", "FatherHusbandName");
            DropColumn("Shelly.Customer", "DOB");
            DropColumn("Shelly.Customer", "MobileAlternate");
            DropColumn("Shelly.Customer", "SetupDetail");
            DropColumn("Shelly.Customer", "AdharCard");
            DropColumn("Shelly.Customer", "PanCard");
            DropColumn("Shelly.Customer", "Passport");
            DropColumn("Shelly.Customer", "DrivingLicence");
            DropColumn("Shelly.Customer", "VoterID");
            DropColumn("Shelly.Customer", "ElectricityBill");
            DropColumn("Shelly.Customer", "Passbook");
            DropColumn("Shelly.Customer", "RationCard");
            DropColumn("Shelly.Customer", "TelephoneBill");
            DropColumn("Shelly.Customer", "IsApproved");
            DropColumn("Shelly.Customer", "ApprovedRejectedBy");
            DropColumn("Shelly.Customer", "ApprovedRejectedDate");
            DropColumn("Shelly.Customer", "IsDeleted");
            DropColumn("Shelly.Customer", "DeletedBy");
            DropColumn("Shelly.Customer", "DeletedDate");
            DropColumn("Shelly.Customer", "OperatorId");
            DropColumn("Shelly.Customer", "FormSubmitterId");
            DropColumn("Shelly.Customer", "PlanId");
            DropColumn("Shelly.Role", "DisplayName");
            DropColumn("Shelly.SMS", "Ticket_ID");
            DropColumn("Shelly.User", "EmailPasword");
            DropColumn("Shelly.SMSGroup", "Numbers");
            DropTable("Bnet.Assignee");
            DropTable("Bnet.Operator");
            DropTable("Bnet.Audit");
            DropTable("Bnet.Comments");
            DropTable("Bnet.Enquiry");
            DropTable("Bnet.Plan");
            DropTable("Bnet.IPAddress");
            DropTable("Bnet.Issue");
            DropTable("Bnet.Monitor2");
            DropTable("Bnet.Monitor");
            DropTable("Bnet.Ticket");
            DropTable("Bnet.Status");
            DropTable("Bnet.UserZone");
            DropTable("Bnet.Vendor");
            DropTable("Bnet.Payment");
            DropTable("Bnet.CustomerBackup");
            DropTable("Bnet.Pages");
            DropTable("Bnet.Permission");
            DropTable("Bnet.InvoiceSetting");
        }
        
        public override void Down()
        {
            CreateTable(
                "Bnet.InvoiceSetting",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        CompanyName = c.String(nullable: false, maxLength: 100),
                        Address1 = c.String(),
                        Address2 = c.String(),
                        Email = c.String(),
                        Phone1 = c.String(),
                        Phone2 = c.String(),
                        GSTNumber = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Permission",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        View = c.Boolean(nullable: false),
                        Add = c.Boolean(nullable: false),
                        Edit = c.Boolean(nullable: false),
                        Delete = c.Boolean(nullable: false),
                        BulkPayment = c.Boolean(),
                        RoleId = c.Int(nullable: false),
                        PageId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Pages",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        PageName = c.String(nullable: false),
                        PageId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.CustomerBackup",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        CustomerId = c.String(),
                        Name = c.String(nullable: false, maxLength: 100),
                        Email = c.String(),
                        Mobile = c.String(),
                        State = c.String(),
                        City = c.String(),
                        Area = c.String(),
                        PinCode = c.String(),
                        RegDate = c.DateTime(),
                        DueDate = c.DateTime(),
                        Plan = c.String(),
                        Amount = c.Int(nullable: false),
                        Status = c.String(),
                        IsRouter = c.Boolean(nullable: false),
                        Image = c.String(),
                        Kyc = c.String(),
                        OperatorId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Payment",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Status = c.Boolean(),
                        sStatus = c.String(),
                        CreateDate = c.DateTime(),
                        DueDate = c.DateTime(),
                        RecDate = c.DateTime(),
                        HandOverDate = c.DateTime(),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        PaymentMode = c.String(),
                        GST = c.Int(nullable: false),
                        GSTAmount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        GSTNumber = c.String(),
                        Recieved = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Balance = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Outstanding = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ChequeDate = c.DateTime(),
                        ChequeStatus = c.String(),
                        ChequeClearanceDate = c.DateTime(),
                        PaymentDetails = c.String(),
                        HandoverTo = c.String(),
                        TransferTo = c.String(),
                        CollectedBy = c.String(),
                        ReceiptNumber = c.String(),
                        HandOverFinalDate = c.DateTime(),
                        ReceiptDate = c.DateTime(),
                        IsHandOverFinal = c.Boolean(),
                        AssignedDate = c.DateTime(),
                        PlanName = c.String(),
                        Speed = c.String(),
                        Type = c.String(),
                        CustomerId = c.Int(nullable: false),
                        OperatorId = c.Int(),
                        PlanId = c.Int(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Vendor",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Mobile = c.String(),
                        Email = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.UserZone",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        ZoneId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Status",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        isActive = c.Boolean(nullable: false),
                        Date = c.DateTime(),
                        TicketId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Ticket",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        TicketId = c.String(nullable: false),
                        Complaint = c.String(),
                        Status = c.String(),
                        RegDate = c.DateTime(nullable: false),
                        CompletedDate = c.DateTime(),
                        Remark = c.String(),
                        Subject = c.String(),
                        OpenBy = c.String(),
                        ClosedBy = c.String(),
                        CustomerId = c.Int(nullable: false),
                        OperatorId = c.Int(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Monitor",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        IP = c.String(),
                        Status = c.String(),
                        Date = c.DateTime(),
                        CustomerId = c.String(),
                        AssigneeId = c.String(),
                        Mobile = c.String(),
                        Site = c.String(),
                        UpDate = c.DateTime(),
                        DownDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Monitor2",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        IP = c.String(),
                        Status = c.String(),
                        Date = c.DateTime(),
                        CustomerId = c.String(),
                        AssigneeId = c.String(),
                        Mobile = c.String(),
                        Site = c.String(),
                        UpDate = c.DateTime(),
                        DownDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Issue",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        IssueId = c.String(nullable: false),
                        Title = c.String(),
                        Status = c.Boolean(nullable: false),
                        RegDate = c.DateTime(nullable: false),
                        CompletedDate = c.DateTime(),
                        Remark = c.String(),
                        Subject = c.String(),
                        Vendor = c.String(),
                        OpenBy = c.String(),
                        ClosedBy = c.String(),
                        CurrentOwner = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.IPAddress",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        IP = c.String(),
                        Date = c.DateTime(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Plan",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Type = c.String(),
                        Speed = c.String(),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        AmountGST = c.Decimal(nullable: false, precision: 18, scale: 2),
                        IsGST = c.Boolean(nullable: false),
                        ZoneId = c.Int(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Enquiry",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Mobile = c.String(),
                        Reminder = c.Boolean(nullable: false),
                        ReminderDate = c.DateTime(),
                        Status = c.String(),
                        CompletedDate = c.DateTime(),
                        RegDate = c.DateTime(),
                        OperatorId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Comments",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Comment = c.String(nullable: false, maxLength: 50),
                        AddedBy = c.String(),
                        Date = c.DateTime(),
                        CommentId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Audit",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Action = c.String(nullable: false),
                        ActionedBy = c.String(),
                        ActionedDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Operator",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 100),
                        Email = c.String(),
                        Mobile = c.String(),
                        RegDate = c.DateTime(),
                        Status = c.String(),
                        Image = c.String(),
                        TelegramChatId = c.String(),
                        Region_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Bnet.Assignee",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        IsOwner = c.Boolean(nullable: false),
                        Date = c.DateTime(),
                        CompletedDate = c.DateTime(),
                        IsCompleted = c.Boolean(nullable: false),
                        IssueId = c.Int(nullable: false),
                        OperatorId = c.Int(),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("Shelly.SMSGroup", "Numbers", c => c.String());
            AddColumn("Shelly.User", "EmailPasword", c => c.String());
            AddColumn("Shelly.SMS", "Ticket_ID", c => c.Int());
            AddColumn("Shelly.Role", "DisplayName", c => c.String());
            AddColumn("Shelly.Customer", "PlanId", c => c.Int());
            AddColumn("Shelly.Customer", "FormSubmitterId", c => c.Int());
            AddColumn("Shelly.Customer", "OperatorId", c => c.Int());
            AddColumn("Shelly.Customer", "DeletedDate", c => c.DateTime());
            AddColumn("Shelly.Customer", "DeletedBy", c => c.String());
            AddColumn("Shelly.Customer", "IsDeleted", c => c.Boolean());
            AddColumn("Shelly.Customer", "ApprovedRejectedDate", c => c.DateTime());
            AddColumn("Shelly.Customer", "ApprovedRejectedBy", c => c.String());
            AddColumn("Shelly.Customer", "IsApproved", c => c.Boolean());
            AddColumn("Shelly.Customer", "TelephoneBill", c => c.Boolean());
            AddColumn("Shelly.Customer", "RationCard", c => c.Boolean());
            AddColumn("Shelly.Customer", "Passbook", c => c.Boolean());
            AddColumn("Shelly.Customer", "ElectricityBill", c => c.Boolean());
            AddColumn("Shelly.Customer", "VoterID", c => c.Boolean());
            AddColumn("Shelly.Customer", "DrivingLicence", c => c.Boolean());
            AddColumn("Shelly.Customer", "Passport", c => c.Boolean());
            AddColumn("Shelly.Customer", "PanCard", c => c.Boolean());
            AddColumn("Shelly.Customer", "AdharCard", c => c.Boolean());
            AddColumn("Shelly.Customer", "SetupDetail", c => c.String());
            AddColumn("Shelly.Customer", "MobileAlternate", c => c.String());
            AddColumn("Shelly.Customer", "DOB", c => c.DateTime());
            AddColumn("Shelly.Customer", "FatherHusbandName", c => c.String());
            AddColumn("Shelly.Customer", "ConnectionType", c => c.String());
            AddColumn("Shelly.Customer", "CAF", c => c.String());
            AddColumn("Shelly.Customer", "FormStatus", c => c.String());
            AddColumn("Shelly.Customer", "FormIsTransferred", c => c.Boolean());
            AddColumn("Shelly.Customer", "FormOutstanding", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("Shelly.Customer", "FormBalance", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("Shelly.Customer", "FormRecieved", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("Shelly.Customer", "FormAmount", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("Shelly.Customer", "FormCollectedBy", c => c.String());
            AddColumn("Shelly.Customer", "FormTransferredTo", c => c.String());
            AddColumn("Shelly.Customer", "FormReceivedBy", c => c.String());
            AddColumn("Shelly.Customer", "FormTransferredDate", c => c.DateTime());
            AddColumn("Shelly.Customer", "FormRecDate", c => c.DateTime());
            AddColumn("Shelly.Customer", "FormCollectedDate", c => c.DateTime());
            AddColumn("Shelly.Customer", "ServerIP", c => c.String());
            AddColumn("Shelly.Customer", "ServerID", c => c.String());
            AddColumn("Shelly.Customer", "Type", c => c.String());
            AddColumn("Shelly.Customer", "Monitoring", c => c.Boolean(nullable: false));
            AddColumn("Shelly.Customer", "Comment", c => c.String());
            AddColumn("Shelly.Customer", "IsRouter", c => c.Boolean(nullable: false));
            AddColumn("Shelly.Customer", "Status", c => c.String());
            AddColumn("Shelly.Customer", "Amount", c => c.Int(nullable: false));
            AddColumn("Shelly.Customer", "DueDate", c => c.DateTime());
            AddColumn("Shelly.Customer", "PinCode", c => c.String());
            AddColumn("Shelly.Customer", "Area", c => c.String());
            AddColumn("Shelly.Customer", "City", c => c.String());
            AddColumn("Shelly.Customer", "State", c => c.String());
            AddColumn("Shelly.Customer", "CustomerId", c => c.String());
            DropForeignKey("Shelly.PrescriptionHistory", "PrescriptionTypeId", "Shelly.PrescriptionType");
            DropForeignKey("Shelly.PrescriptionHistory", "PrescriptionId", "Shelly.Prescription");
            DropForeignKey("Shelly.PrescriptionHistory", "PaymentModeId", "Shelly.PaymentMode");
            DropForeignKey("Shelly.PrescriptionHistory", "MedicineId", "Shelly.Medicine");
            DropForeignKey("Shelly.PrescriptionHistory", "CustomerID", "Shelly.Customer");
            DropIndex("Shelly.PrescriptionHistory", new[] { "PaymentModeId" });
            DropIndex("Shelly.PrescriptionHistory", new[] { "MedicineId" });
            DropIndex("Shelly.PrescriptionHistory", new[] { "PrescriptionId" });
            DropIndex("Shelly.PrescriptionHistory", new[] { "PrescriptionTypeId" });
            DropIndex("Shelly.PrescriptionHistory", new[] { "CustomerID" });
            AlterColumn("Shelly.SMSGroup", "IsCustom", c => c.Boolean(nullable: false));
            DropColumn("Shelly.Customer", "Address");
            DropColumn("Shelly.Customer", "Gender");
            DropColumn("Shelly.Customer", "CaseNumber");
            DropTable("Shelly.SMSGroupMembers");
            DropTable("Shelly.PrescriptionType");
            DropTable("Shelly.Prescription");
            DropTable("Shelly.PrescriptionHistory");
            DropTable("Shelly.PaymentMode");
            DropTable("Shelly.Medicine");
            CreateIndex("Bnet.Permission", "PageId");
            CreateIndex("Bnet.CustomerBackup", "OperatorId");
            CreateIndex("Bnet.Payment", "PlanId");
            CreateIndex("Bnet.Payment", "OperatorId");
            CreateIndex("Bnet.Payment", "CustomerId");
            CreateIndex("Bnet.UserZone", "ZoneId");
            CreateIndex("Bnet.UserZone", "UserId");
            CreateIndex("Shelly.User", "OperatorId");
            CreateIndex("Bnet.Status", "TicketId");
            CreateIndex("Bnet.Ticket", "OperatorId");
            CreateIndex("Bnet.Ticket", "CustomerId");
            CreateIndex("Shelly.SMS", "Ticket_ID");
            CreateIndex("Bnet.Issue", "CurrentOwner");
            CreateIndex("Bnet.Plan", "ZoneId");
            CreateIndex("Shelly.Customer", "PlanId");
            CreateIndex("Shelly.Customer", "FormSubmitterId");
            CreateIndex("Shelly.Customer", "OperatorId");
            CreateIndex("Bnet.Enquiry", "OperatorId");
            CreateIndex("Bnet.Comments", "CommentId");
            CreateIndex("Bnet.Operator", "Region_ID");
            CreateIndex("Bnet.Assignee", "OperatorId");
            AddForeignKey("Bnet.Permission", "PageId", "Bnet.Pages", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.CustomerBackup", "OperatorId", "Bnet.Operator", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.Payment", "PlanId", "Bnet.Plan", "ID");
            AddForeignKey("Bnet.Payment", "OperatorId", "Bnet.Operator", "ID");
            AddForeignKey("Bnet.Payment", "CustomerId", "Bnet.Customer", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.UserZone", "UserId", "Bnet.User", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.UserZone", "ZoneId", "Bnet.Zone", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.User", "OperatorId", "Bnet.Operator", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.SMS", "Ticket_ID", "Bnet.Ticket", "ID");
            AddForeignKey("Bnet.Status", "TicketId", "Bnet.Ticket", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.Ticket", "OperatorId", "Bnet.Operator", "ID");
            AddForeignKey("Bnet.Ticket", "CustomerId", "Bnet.Customer", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.Issue", "CurrentOwner", "Bnet.Operator", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.Customer", "PlanId", "Bnet.Plan", "ID");
            AddForeignKey("Bnet.Plan", "ZoneId", "Bnet.Zone", "ID");
            AddForeignKey("Bnet.Customer", "OperatorId", "Bnet.Operator", "ID");
            AddForeignKey("Bnet.Customer", "FormSubmitterId", "Bnet.Operator", "ID");
            AddForeignKey("Bnet.Comments", "CommentId", "Bnet.Enquiry", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.Enquiry", "OperatorId", "Bnet.Operator", "ID", cascadeDelete: true);
            AddForeignKey("Bnet.Assignee", "OperatorId", "Bnet.Operator", "ID");
            AddForeignKey("Bnet.Operator", "Region_ID", "Bnet.Region", "ID");
            MoveTable(name: "Shelly.SMSGroup", newSchema: "Bnet");
            MoveTable(name: "Shelly.UserRegion", newSchema: "Bnet");
            MoveTable(name: "Shelly.User", newSchema: "Bnet");
            MoveTable(name: "Shelly.UserRole", newSchema: "Bnet");
            MoveTable(name: "Shelly.SMS", newSchema: "Bnet");
            MoveTable(name: "Shelly.Role", newSchema: "Bnet");
            MoveTable(name: "Shelly.Error", newSchema: "Bnet");
            MoveTable(name: "Shelly.Zone", newSchema: "Bnet");
            MoveTable(name: "Shelly.Customer", newSchema: "Bnet");
            MoveTable(name: "Shelly.Region", newSchema: "Bnet");
        }
    }
}
