namespace Iftekhari.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addColTotalPages_TblBook : DbMigration
    {
        public override void Up()
        {
            AddColumn("Iftekhari.Book", "TotalPages", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("Iftekhari.Book", "TotalPages");
        }
    }
}
