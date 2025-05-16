namespace Iftekhari.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCols_Audits_TblBook : DbMigration
    {
        public override void Up()
        {
            AddColumn("Iftekhari.Book", "AddedBy", c => c.String());
            AddColumn("Iftekhari.Book", "UpdatedBy", c => c.String());
            AddColumn("Iftekhari.Book", "Published", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("Iftekhari.Book", "Published");
            DropColumn("Iftekhari.Book", "UpdatedBy");
            DropColumn("Iftekhari.Book", "AddedBy");
        }
    }
}
